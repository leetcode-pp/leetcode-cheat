const t = require("../locales").t;
module.exports = () => ({
  title: t("Locale.codeTemplate.graph.title"),
  logo: require("../imgs/grapth.svg"),
  list: [
    {
      text: t("Locale.codeTemplate.graph.item1"),
      problems: [
        {
          id: "network-delay-time",
          title: t("Locale.problem.743"),
        },
      ],
      codes: [
        {
          language: "py",
          desc: `
${t("Locale.codeTemplate.graph.item1_desc1")}          


\`\`\`
E -- 1 --> B -- 1 --> C -- 1 --> D -- 1 --> F
 \\                                         /\
  \\                                        ||
    -------- 2 ---------> G ------- 1 ------
    \`\`\`

${t("Locale.codeTemplate.graph.item1_desc2")}          


\`\`\`py
G = {
    "B": [["C", 1]],
    "C": [["D", 1]],
    "D": [["F", 1]],
    "E": [["B", 1], ["G", 2]],
    "F": [],
    "G": [["F", 1]],
}

shortDistance = dijkstra(G, "E", "C")
print(shortDistance)  # E -- 3 --> F -- 3 --> C == 6
\`\`\`
          `,
          text: `
import heapq


def dijkstra(graph, start, end):
    # 堆里的数据都是 (cost, i) 的二元祖，其含义是“从 start 走到 i 的距离是 cost”。
    # The data in the heap consists of tuples (cost, i), where it signifies "the distance from start to i is cost".
    heap = [(0, start)]
    visited = set()
    while heap:
        (cost, u) = heapq.heappop(heap)
        if u in visited:
            continue
        visited.add(u)
        if u == end:
            return cost
        for v, c in graph[u]:
            if v in visited:
                continue
            next = cost + c
            heapq.heappush(heap, (next, v))
    return -1
            `,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.graph.item2"),
      problems: [
        {
          id: "course-schedule-iv",
          title: t("Locale.problem.1462"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
# graph 是邻接矩阵，n 是顶点个数
# The graph is represented as an adjacency matrix, where n represents the number of vertices.

# graph 形如： graph[u][v] = w
# graph is like: graph[u][v] = w
def floyd_warshall(graph, n):
    dist = [[float("inf") for _ in range(n)] for _ in range(n)]

    for i in range(n):
        for j in range(n):
            dist[i][j] = graph[i][j]

    # 将顶点k与所有其他顶点(i, j)进行比较
    # check vertex k against all other vertices (i, j)
    for k in range(n):
        # 循环遍历图数组的行
        # looping through rows of graph array
        for i in range(n):
            # 循环遍历图数组的列
            # looping through columns of graph array
            for j in range(n):
                if (
                    dist[i][k] != float("inf")
                    and dist[k][j] != float("inf")
                    and dist[i][k] + dist[k][j] < dist[i][j]
                ):
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist
              `,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.graph.item3"),
      problems: [
        {
          id: "https://binarysearch.com/problems/Best-Currency-Path",
          title: "Best Currency Path",
        },
      ],
      codes: [
        {
          language: "py",
          text: `
# 如果不存在，返回-1
# return -1 for not exsit
# 如果存在，返回 dis map，dis[v]表示从点s到点v的最小花费
# else return dis map where dis[v] means for point s the least cost to point v
def bell_man(edges, s):
    dis = defaultdict(lambda: math.inf)
    dis[s] = 0
    for _ in range(n):
        for u, v, w in edges:
            if dis[u] + w < dis[v]:
                dis[v] = dis[u] + w

    for u, v, w in edges:
        if dis[u] + w < dis[v]:
            return -1

    return dis
                `,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.graph.item4"),
      problems: [
        {
          id: "min-cost-to-connect-all-points",
          title: t("Locale.problem.1584"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
from typing import List, Tuple


def kruskal(num_nodes: int, edges: List[Tuple[int, int, int]]) -> int:
    """
    >>> kruskal(4, 3, [(0, 1, 3), (1, 2, 5), (2, 3, 1)])
    [(2, 3, 1), (0, 1, 3), (1, 2, 5)]

    >>> kruskal(4, 5, [(0, 1, 3), (1, 2, 5), (2, 3, 1), (0, 2, 1), (0, 3, 2)])
    [(2, 3, 1), (0, 2, 1), (0, 1, 3)]

    >>> kruskal(4, 6, [(0, 1, 3), (1, 2, 5), (2, 3, 1), (0, 2, 1), (0, 3, 2),
    ... (2, 1, 1)])
    [(2, 3, 1), (0, 2, 1), (2, 1, 1)]
    """
    edges = sorted(edges, key=lambda edge: edge[2])

    parent = list(range(num_nodes))

    def find_parent(i):
        if i != parent[i]:
            parent[i] = find_parent(parent[i])
        return parent[i]

    minimum_spanning_tree_cost = 0
    minimum_spanning_tree = []

    for edge in edges:
        parent_a = find_parent(edge[0])
        parent_b = find_parent(edge[1])
        if parent_a != parent_b:
            minimum_spanning_tree_cost += edge[2]
            minimum_spanning_tree.append(edge)
            parent[parent_a] = parent_b

    return minimum_spanning_tree


if __name__ == "__main__":  # pragma: no cover
    num_nodes, num_edges = list(map(int, input().strip().split()))
    edges = []

    for _ in range(num_edges):
        node1, node2, cost = [int(x) for x in input().strip().split()]
        edges.append((node1, node2, cost))

    kruskal(num_nodes, edges)
                  `,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.graph.item5"),
      problems: [
        {
          id: "min-cost-to-connect-all-points",
          title: t("Locale.problem.1584"),
        },
      ],
      codes: [
        {
          language: "py",
          text: `
import sys
from collections import defaultdict


def PrimsAlgorithm(l):  # noqa: E741

    nodePosition = []

    def get_position(vertex):
        return nodePosition[vertex]

    def set_position(vertex, pos):
        nodePosition[vertex] = pos

    def top_to_bottom(heap, start, size, positions):
        if start > size // 2 - 1:
            return
        else:
            if 2 * start + 2 >= size:
                m = 2 * start + 1
            else:
                if heap[2 * start + 1] < heap[2 * start + 2]:
                    m = 2 * start + 1
                else:
                    m = 2 * start + 2
            if heap[m] < heap[start]:
                temp, temp1 = heap[m], positions[m]
                heap[m], positions[m] = heap[start], positions[start]
                heap[start], positions[start] = temp, temp1

                temp = get_position(positions[m])
                set_position(positions[m], get_position(positions[start]))
                set_position(positions[start], temp)

                top_to_bottom(heap, m, size, positions)
    
    # 如果最小堆中任意节点的值减小，则更新函数
    # Update function if value of any node in min-heap decreases
    def bottom_to_top(val, index, heap, position):
        temp = position[index]

        while index != 0:
            if index % 2 == 0:
                parent = int((index - 2) / 2)
            else:
                parent = int((index - 1) / 2)

            if val < heap[parent]:
                heap[index] = heap[parent]
                position[index] = position[parent]
                set_position(position[parent], index)
            else:
                heap[index] = val
                position[index] = temp
                set_position(temp, index)
                break
            index = parent
        else:
            heap[0] = val
            position[0] = temp
            set_position(temp, 0)

    def heapify(heap, positions):
        start = len(heap) // 2 - 1
        for i in range(start, -1, -1):
            top_to_bottom(heap, i, len(heap), positions)

    def deleteMinimum(heap, positions):
        temp = positions[0]
        heap[0] = sys.maxsize
        top_to_bottom(heap, 0, len(heap), positions)
        return temp

    visited = [0 for i in range(len(l))]
    # 所选顶点的邻近树顶点
    # Neighboring Tree Vertex of selected vertex
    Nbr_TV = [-1 for i in range(len(l))]  
    # 部分树的探索顶点到邻近顶点的最小距离
    # Minimum Distance of explored vertex with neighboring vertex of partial tree
    # 以图表形式呈现
    # formed in graph
    # 堆顶点到相邻顶点的距离
    # Heap of Distance of vertices from their neighboring vertex
    Distance_TV = []  
    Positions = []

    for x in range(len(l)):
        p = sys.maxsize
        Distance_TV.append(p)
        Positions.append(x)
        nodePosition.append(x)

    TreeEdges = []
    visited[0] = 1
    Distance_TV[0] = sys.maxsize
    for x in l[0]:
        Nbr_TV[x[0]] = 0
        Distance_TV[x[0]] = x[1]
    heapify(Distance_TV, Positions)

    for i in range(1, len(l)):
        vertex = deleteMinimum(Distance_TV, Positions)
        if visited[vertex] == 0:
            TreeEdges.append((Nbr_TV[vertex], vertex))
            visited[vertex] = 1
            for v in l[vertex]:
                if visited[v[0]] == 0 and v[1] < Distance_TV[get_position(v[0])]:
                    Distance_TV[get_position(v[0])] = v[1]
                    bottom_to_top(v[1], get_position(v[0]), Distance_TV, Positions)
                    Nbr_TV[v[0]] = vertex
    return TreeEdges


if __name__ == "__main__":  # pragma: no cover
    # < --------- Prims Algorithm --------- >
    n = int(input("Enter number of vertices: ").strip())
    e = int(input("Enter number of edges: ").strip())
    adjlist = defaultdict(list)
    for x in range(e):
        l = [int(x) for x in input().strip().split()]  # noqa: E741
        adjlist[l[0]].append([l[1], l[2]])
        adjlist[l[1]].append([l[0], l[2]])
    print(PrimsAlgorithm(adjlist))
                    `,
        },
      ],
    },
    {
      text: t("Locale.codeTemplate.graph.item6"),
      problems: [],
      codes: [
        {
          language: "py",
          text: `
def topologicalSort(graph):
    """
    Kahn算法是使用广度优先搜索（BFS）来找到有向无环图（Directed Acyclic Graph）的拓扑排序的算法。
    Kahn's Algorithm is used to find Topological ordering of Directed Acyclic Graph
    using BFS.
    """
    indegree = [0] * len(graph)
    queue = collections.deque([])
    topo = []
    cnt = 0

    for key, values in graph.items():
        for i in values:
            indegree[i] += 1

    for i in range(len(indegree)):
        if indegree[i] == 0:
            queue.append(i)

    while queue:
        vertex = queue.popleft()
        cnt += 1
        topo.append(vertex)
        for x in graph[vertex]:
            indegree[x] -= 1
            if indegree[x] == 0:
                queue.append(x)

    if cnt != len(graph):
        print("Cycle exists")
    else:
        print(topo)

# 图的邻接表
# Adjacency List of Graph
graph = {0: [1, 2], 1: [3], 2: [3], 3: [4, 5], 4: [], 5: []}
topologicalSort(graph)
                  `,
        },
      ],
    },
  ],
  link: "",
});
