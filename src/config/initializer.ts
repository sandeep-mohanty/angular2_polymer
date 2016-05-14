System.config({
	packages: {
		dist: {
			format: "register",
			defaultExtension: "js"
		}
	}
});

System.import("dist/config/bootstrapper").then(null, console.error.bind(console));