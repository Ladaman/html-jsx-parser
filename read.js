// const fs = require("fs");
// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse").default;

// // Define the input and output file paths
// const inputFilePath = "./app.jsx";
// const outputFilePath = "./output.json";

// // Load the input file and parse it with Babel parser
// const jsxCode = fs.readFileSync(inputFilePath, "utf8");
// const ast = parser.parse(jsxCode, {
//   sourceType: "module",
//   plugins: ["jsx"],
// });

// // Traverse the AST and extract the text content of JSX elements
// const textArray = [];
// traverse(ast, {
//   JSXElement: ({ node }) => {
//     const text = node.children
//       .filter((child) => child.type === "JSXText")
//       .map((child) => child.value.trim())
//       .join(" ");
//     if (text) {
//       textArray.push(text);
//     }
//   },
// });

// // Write the text array to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(textArray, null, 2));

// v.3

// const fs = require("fs");
// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse").default;

// // Define the input and output file paths
// const inputFilePath = "./app.jsx";
// const outputFilePath = "./output.json";

// // Load the input file and parse it with Babel parser
// const jsxCode = fs.readFileSync(inputFilePath, "utf8");
// const ast = parser.parse(jsxCode, {
//   sourceType: "module",
//   plugins: ["jsx"],
// });

// // Traverse the AST and extract the text content of JSX elements
// const data = {};
// traverse(ast, {
//   JSXElement: ({ node }) => {
//     console.log(node);
//     const text = node.children
//       .filter((child) => child.type === "JSXText")
//       .map((child) => child.value.trim())
//       .join(" ");
//     if (text) {
//       data[node.openingElement.name.name] = text;
//       // console.log(child.type);
//     }
//   },
// });
// // console.log(data);
// // Write the data object to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));

// v.4

// const fs = require("fs");
// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse").default;

// // Define the input and output file paths
// const inputFilePath = "./app.jsx";
// const outputFilePath = "./output.json";

// // Load the input file and parse it with Babel parser
// const jsxCode = fs.readFileSync(inputFilePath, "utf8");
// const ast = parser.parse(jsxCode, {
//   sourceType: "module",
//   plugins: ["jsx"],
// });

// // Traverse the AST and extract the text content of JSX elements
// const data = {};
// let i = 0;
// traverse(ast, {
//   JSXElement: ({ node }) => {
//     const text = node.children
//       .filter((child) => child.type === "JSXText")
//       .map((child) => child.value.trim())
//       .join(" ");
//     if (text) {
//       data[`T${i}`] = text;
//       // console.log(data);
//       i++;
//     }
//   },
// });

// // Write the data object to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));

// v.5 mostly correct

// const fs = require("fs");
// const path = require("path");
// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse").default;

// // Define the input and output file paths
// const inputFolderPath = "./components/library";
// const outputFilePath = "./output.json";

// // Function to traverse a directory recursively and return the paths of all JSX files
// function getJSXFilePaths(dirPath, arrayOfFilePaths) {
//   const files = fs.readdirSync(dirPath);
//   arrayOfFilePaths = arrayOfFilePaths || [];

//   files.forEach((file) => {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFilePaths = getJSXFilePaths(
//         dirPath + "/" + file,
//         arrayOfFilePaths
//       );
//     } else if (file.endsWith(".jsx")) {
//       arrayOfFilePaths.push(path.join(dirPath, "/", file));
//     }
//   });

//   return arrayOfFilePaths;
// }

// // Traverse all JSX files and extract the text content of JSX elements
// const data = {};
// let i = 0;
// const jsxFilePaths = getJSXFilePaths(inputFolderPath);
// jsxFilePaths.forEach((jsxFilePath) => {
//   const jsxCode = fs.readFileSync(jsxFilePath, "utf8");
//   const ast = parser.parse(jsxCode, {
//     sourceType: "module",
//     plugins: ["jsx"],
//   });

//   traverse(ast, {
//     JSXElement: ({ node }) => {
//       const text = node.children
//         .filter((child) => child.type === "JSXText")
//         .map((child) => child.value.trim())
//         .join(" ");
//       if (text && !text.replaceAll(" ", "").length == 0) {
//         console.log(text);
//         data[`T${i}`] = text;
//         i++;
//       }
//     },
//   });

//   console.log(jsxFilePath);
//   // console.log(data);
//   console.log("<======================================>");
// });
// // Write the data object to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));

// v.6

// const fs = require("fs");
// const path = require("path");
// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse").default;

// // Define the input folder and output file paths
// const inputFolder = "./shorterData";
// const outputFilePath = "./output.json";

// // Traverse the input folder and parse each JSX file
// const data = {};
// fs.readdirSync(inputFolder).forEach((filename) => {
//   const inputFilepath = path.join(inputFolder, filename);
//   if (
//     fs.lstatSync(inputFilepath).isFile() &&
//     path.extname(inputFilepath) === ".jsx"
//   ) {
//     const jsxCode = fs.readFileSync(inputFilepath, "utf8");
//     const ast = parser.parse(jsxCode, {
//       sourceType: "module",
//       plugins: ["jsx"],
//     });

//     // Traverse the AST and extract the text content of JSX elements
//     const fileData = {};
//     let i = 0;
//     traverse(ast, {
//       JSXElement: ({ node }) => {
//         const text = node.children
//           .filter((child) => child.type === "JSXText")
//           .map((child) => child.value.trim())
//           .join(" ");
//         if (text && !text.replaceAll(" ", "").length == 0) {
//           console.log(text);
//           fileData[`T${i}`] = text;
//           i++;
//         }
//       },
//     });

//     // Add the file data to the output object
//     data[filename] = fileData;
//   }
// });

// // Write the data object to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));

// v.7

// const fs = require("fs");
// const path = require("path");
// const parser = require("@babel/parser");
// const traverse = require("@babel/traverse").default;

// const inputDirectory = "./components/library";
// const outputFilePath = "./output.json";

// // Recursive function to process all JSX files in a directory and its subdirectories
// function processDirectory(directoryPath, result) {
//   const files = fs.readdirSync(directoryPath);
//   for (const file of files) {
//     const filePath = path.join(directoryPath, file);
//     if (fs.statSync(filePath).isDirectory()) {
//       // If it's a directory, recursively process it
//       result[file] = {};
//       processDirectory(filePath, result[file]);
//     } else if (path.extname(filePath) === ".jsx") {
//       // If it's a JSX file, process it
//       const jsxCode = fs.readFileSync(filePath, "utf8");
//       const ast = parser.parse(jsxCode, {
//         sourceType: "module",
//         plugins: ["jsx"],
//       });
//       const data = {};
//       let i = 0;
//       traverse(ast, {
//         JSXElement: ({ node }) => {
//           const text = node.children
//             .filter((child) => child.type === "JSXText")
//             .map((child) => child.value.trim())
//             .join(" ");
//           if (text && !text.replaceAll(" ", "").length == 0) {
//             console.log(text);
//             data[`T${i}`] = text;
//             i++;
//           }
//         },
//       });
//       result[file] = data;
//     }
//   }
// }

// // Create the output object and process the directory
// const output = {};
// processDirectory(inputDirectory, output);

// // Write the output object to a JSON file
// fs.writeFileSync(outputFilePath, JSON.stringify(output, null, 2));

// v.8

const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const path = require("path");

// Define the input and output folder paths
const inputFolderPath = "./components/library";
const outputFilePaths = [
  "./locales/en.json",
  "./locales/ka.json",
  "./locales/ru.json",
];

// Traverse the input folder recursively and get all JSX files
const traverseFolder = (folderPath) => {
  const files = fs.readdirSync(folderPath);
  let jsxFiles = [];
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      jsxFiles = jsxFiles.concat(traverseFolder(filePath));
    } else if (file.endsWith(".jsx")) {
      jsxFiles.push(filePath);
    }
  });
  return jsxFiles;
};

// Load and parse each JSX file and extract the text content of JSX elements
const data = {};
const jsxFiles = traverseFolder(inputFolderPath);
let i = 0;
jsxFiles.forEach((filePath) => {
  const jsxCode = fs.readFileSync(filePath, "utf8");
  const ast = parser.parse(jsxCode, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  const fileData = {};
  traverse(ast, {
    JSXElement: ({ node }) => {
      const text = node.children
        .filter((child) => child.type === "JSXText")
        .map((child) => child.value.trim())
        .join(" ");
      if (text && !text.replaceAll(" ", "").length == 0 && isNaN(text)) {
        console.log(text);
        fileData[`T${i}`] = text;
        i++;
      }
    },
  });
  i = 0;
  const fileName = path.basename(filePath, ".jsx");
  data[fileName] = fileData;
});

// Write the data object to a JSON file
outputFilePaths.forEach((outputFilePath) => {
  fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
});
