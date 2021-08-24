module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.task.registerTask('shellToolbox', 'Group of shell tasks', function(chooseTask) {
		var shell = require('shelljs');

		if (chooseTask == 'commitChanges') {
			shell.exec(
				'cd C:/User/Desktop/ProjectPath' +
				'&& git checkout master' +
				'&& git pull' +
				'&& git checkout -b "CommitChanges"' +
				'&& git add .' +
				'&& git push'
			);
		}
	});

	grunt.registerTask('default', ['shellToolbox:commitChanges']);
};