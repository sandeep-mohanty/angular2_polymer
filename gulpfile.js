// Bring in the required dependencies

var fs = require("fs"); // File system module
var gulp = require("gulp"); // Gulp module
var del = require("del"); // Delete module
var exec = require("child_process").exec; // Need a child process executor to run commands
var clear = require("clear"); // Console clear module

// Cleaning task
gulp.task("clean",function(){
	del(["./dist/*"], function(){
		console.log("Clean task complete !");
	});
});


// Compiling Typescript files task using 'ntypescript'
gulp.task("ntscompile", function(){
	exec("ntsc", function(err, message, stderr){
		clear();
		if (err) {
			console.log("\nCompile time error(s) found in the source code:\n");
			console.log(message);
		} else {
			console.log("\nCongratulations! Compilation successful with no error(s).\n");
			console.log("Following files were in the build path: \n")
			console.log(message);
		}
	});
});


// Watch source folders for change in source code
gulp.task("watch", function(){
	gulp.watch(["./src/**/*.ts"], ["clean","ntscompile"]);
	console.log("\nI'm watching the source folder now for code changes !");
});

// Default task to start off Gulp execution
gulp.task("default", ["clean","ntscompile","watch"], function(){
	console.log("\nDefault task execution complete !");
});
