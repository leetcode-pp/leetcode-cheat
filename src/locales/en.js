const en = {
  app: {
    name: "LeetCode Cheatsheet",
    preview: "Preview",
    copyMdOrigin: "Click to copy MarkDown origin",
    fullScreen: "Full Screen (Press ESC to exit)",
    toUse: "To Use",
    custom: "Custom",
    presets: "Presets",
    setLang: "Set Language",
    changeLang: "中文",
    copy: "copy",
    save: "save",
    yes: "yes",
    no: "no",
    delete: "delete",
    delTitle: "Are you sure you want to delete it?",
    deleteSuccess: "Delete successfully~",
    saveSuccess: "Save successfully~",
    copySuccess: "Copy successfully~",
    article: "article",
    recommendedQuestions: "Recommended Questions:",
    goForDictation: "go for dictation",
    contribution: "Correction or contribution to other languages",
    back: "Back to Home page",
    viewSolution: "View solution",
    viewInHandpickCollection:
      "This question has been collected in the handpick collection《{slotText}》Click to view",
    notCollected:
      "This question has not been collected by LeetCode Plus, click to view all collected questions",
    allCollected: "All collected questions",
    writingExplanation: "Writing explanation",
    goToTheWebsiteToUse: "Go to the website to use",
    checkTips:
      "Generally, as long as you turn on automatic updates, chrome will automatically update within five hours after the plug-in is updated. If you want to update as soon as possible, or if you disable automatic updates, you can check the latest version here.",
    checkBtn: "Check for updates",
    selfIntroduction:
      "The author is a front-end architect with 40K stars on Github, the author of the leetcode-cheatsheet leetcode plugin, master all kinds of algorithm routines, and wrote hundreds of thousands of words of algorithm brushing e-books. Reply to the public account [电子书] to get.",
    allSolutions: {
      columns: {
        title: "Title",
        tag: "Tag",
      },
    },
    initializeContentScriptFailed:
      "Failed to initialize the chrome plugin content script",
    run: "Run",
    submit: "Submit",
    wirteSolution: "Write Solution",
    visualizationDebug: "Visualization Debug",
    linkedListCommnet:
      "If you are debugging linked list questions, it is very troublesome to generate linked lists manually. If you want to quickly generate linked lists, you can comment out the following method and use the following method to enter an array and return a linked list.",
    visualDebugComment:
      "Replace xxx below with the main function name, yyy with the test case parameter, and turn on debugging",
    getProblemError:
      "Failed to get the problem description, please switch to the problem description tab first",
    savingProblem: "Saving problem information, please wait~",
    githubAPIError:
      "Failed to use Github API, has been switched to normal mode, normal mode can only automatically bring in the problem name, problem address and solution language.",
    notYet: "Not yet",
  },
  problem: {
    743: "743. Network Delay Time",
    1109: "1109. Corporate Flight Bookings",
    1314: "1314. Matrix Block Sum",
    1462: "1462. Course Schedule IV",
    1480: "1480. Running Sum of 1d Array",
    1584: "1584. Min Cost to Connect All Points",
    2536: "2536. Increment Submatrices by One",
  },
  codeTemplate: {
    name: "Code Template",
    perSum: {
      title: "Prefix Sum",
      tips: "It is recommended to learn it first and then use the template. If you don't know it yet, you can take a look at this article",
      item1: "One-dimensional prefix sum",
      item2: "Two-dimensional prefix sum",
      item3: "One-dimensional difference array",
      item4: "Two-dimensional difference array",
    },
    graph: {
      title: "Graph",
      item1: "dijkstra(single-source greedy shortest path)",
      item2: "floyd_warshall(multi-source dynamic programming shortest path)",
      item3: "Bellman–Ford(single-source dynamic programming shortest path)",
      item4:
        "Kruskal(also known as adding edge method, is a minimum spanning tree algorithm)",
      item5:
        "Prim(also known as adding point method, is a minimum spanning tree algorithm)",
      item6: "Kahn(topological sorting based on BFS)",
    },
    moreTemplate: "More templates will be updated one after another~",
  },
  dataStructureVisualization: {
    name: "Data Structure Visualization",
    incrementalUsage: "Incremental Usage",
    explain1:
      "The editing function is not supported. If you need to edit, you can do so indirectly by first \"use\", then \"save\", and finally \"delete\" the original data.",
    explain2:
      "Templates can be used incrementally. Click the drop-down triangle of 'to use' and select Incremental Usage.",
    explain3:
      "The template will be generated according to the position of your mouse. For example, if your mouse is at point (100, 100), the template will be offset by (100, 100) units as a whole. If the template is not exactly at (100, 100), it means that the template itself was not created with (0, 0) as the top-left corner. When creating custom templates, it's important to keep this in mind.",
    explain4: "You can also choose to use the native excalidraw directly ",
  },

  explanationTemplate: {
    name: "Explanation Template",
    goToTheWebsiteToUse: "Go to the website to use",
    problemAddress: "Problem Address",
    problemDesc: "Problem Description",
    preKnowledge: "Pre Knowledge",
    company: "Company",
    thinking: "Thinking",
    keyPoints: "Key Points",
    languageSupport: "Language Support",
    complexityAnalysis: "Complexity Analysis",
    complexityDeclare: "Let n be the length of the array.",
    timeComplexity: "Time Complexity",
    spaceComplexity: "Space Complexity",
    howToUse: "How to use it?",
    programmingLanguage: "Programming Language:",
    commonFormulas: "Common formulas (click to copy):",
    noBackup: "No backup file found",
    restore: "Restore last edit content",
    backupTips:
      "The explanation is backed up every five seconds. If you accidentally refresh the browser, you can click the restore button below to restore it. Since it is an overwrite backup, only the last edited content will be saved.",
    afterUpdateTemplateTips:
      "More explanation templates will be provided later.",
    afterUpdateThemeTips:
      "More themes and user-defined themes will be supported later.",
  },
  complexityQuickCheck: {
    name: "Complexity Quick Check",
    tips: "Don't understand why? Click here",
    dataScale: "Data Scale",
    timeComplexity: "Algorithm acceptable time complexity",
  },
  learningRoute: {
    name: "Learning Route",
  },
  checkForUpdates: {
    name: "Check for Updates",
  },
  aboutMe: {
    name: "About Me",
  },
};
// export default en;
module.exports = en;
