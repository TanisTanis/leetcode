var findDuplicate = function (paths) {
  let files = {};

  for (let i = 0; i < paths.length; i++) {
    let directoryInfo = paths[i].split(" ");

    const directory = directoryInfo[0];

    for (let j = 1; j < directoryInfo.length; j++) {
      const fileInfo = directoryInfo[j].split("(");

      const fileName = fileInfo[0];
      const fileContent = fileInfo[1].slice(0, fileInfo[1].length - 1);
      const fullDirectory = `${directory}/${fileName}`;

      if (files[fileContent]) {
        files[fileContent].push(fullDirectory);
      } else {
        files[fileContent] = [fullDirectory];
      }
    }
  }

  const duplicateFiles = [];

  for (let content in files) {
    if (files[content].length > 1) {
      duplicateFiles.push(files[content]);
    }
  }

  return duplicateFiles;
};
