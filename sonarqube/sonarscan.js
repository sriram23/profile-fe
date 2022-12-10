const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "c1011b2dd7093cd59a355848355807c281950db7",
        options: {
            'sonar.projectName': 'sriram_website_fe',
            'sonar.projectDescription': 'Just a react application',
            'sonar.projectKey': 'sriram_website_fe',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)