// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let Badge;
  if(license == 'MIT License'){
       Badge = "MIT-red)";
  }else if(license == 'Apache 2.0 license badge'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20Apache%202.0-green)";
  }else if(license == 'GNU General Public License v3.0'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20GNU%20Public%20v3.0-green)";
  }else if(license == 'BSD 2-Clause "Simplified" License'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20BSD%202-blue)";
  }else if(license == 'BSD 3-Clause "New" or "Revised" License'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20BSD%203-purple)";
  }else if(license == 'Boost Software License 1.0'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20Boost%20Software-pink)";
  }else if(license == 'Creative Commons Zero v1.0 Universal'){
       Badge = "[Static Badge](https://img.shields.io/badge/License-%20Commons%20Zero%20v1.0-yellow)";
  }else if(license == 'Eclipse Public License 2.0'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20Eclipse%20Public%202.0-red)";
  }else if(license == 'GNU Affero General Public License v3.0'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20GNU%20Affero%20Public%20v3.0-blue)";
  }else if(license == 'GNU General Public License v2.0'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20GNU%20Public%20v2.0-purple)";
  }else if(license == 'GNU Lesser General Public License v2.1'){
       Badge = "![Static Badge](https://img.shields.io/badge/License-%20GNU%20Lesser%20Public%20v2.0-pink)";
  }else if(license == 'Mozilla Public License 2.0'){
       Badge = "[Static Badge](https://img.shields.io/badge/License-%20Mozilla%202.0-yellow)";
  }else if(license == 'The Unlicense'){
       Badge = "[Static Badge](https://img.shields.io/badge/License-%20The%20Unlicense-green)";
  }else if(license == 'None'){
       Badge = '';
  }
  return Badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {
  
  let Link;
  if(license == 'MIT License'){
       Link = "https://mit-license.org";
  }else if(license == 'Apache license 2.0'){
       Link = "https://pitt.libguides.com/openlicensing/apache2";
  }else if(license == 'GNU General Public License v3.0'){
       Link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  }else if(license == 'BSD 2-Clause "Simplified" License'){
       Link = "https://opensource.org/license/bsd-2-clause";
  }else if(license == 'BSD 3-Clause "New" or "Revised" License'){
       Link = "https://choosealicense.com/licenses/bsd-3-clause/";
  }else if(license == 'Boost Software License 1.0'){
       Link = "https://www.boost.org/LICENSE_1_0.txt";
  }else if(license == 'Creative Commons Zero v1.0 Universal'){
       Link = "https://spdx.org/licenses/CC0-1.0";
  }else if(license == 'Eclipse Public License 2.0'){
       Link = "https://www.eclipse.org/legal/epl-2.0/";
  }else if(license == 'GNU Affero General Public License v3.0'){
       Link = "https://www.gnu.org/licenses/agpl-3.0.en.html";
  }else if(license == 'GNU General Public License v2.0'){
       Link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  }else if(license == 'GNU Lesser General Public License v2.1'){
       Link = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html";
  }else if(license == 'Mozilla Public License 2.0'){
       Link = "https://www.mozilla.org/en-US/MPL/";
  }else if(license == 'The Unlicense'){
       Link = "https://choosealicense.com/licenses/unlicense/";
  }else if(license == 'None'){
       Link = '';
  }
  return Link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let LSection;
  if(license != ''){
    LSection = `I am using the ${license} license`
  }else
  LSection == null
  return LSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
 
          ## License
   ![Static Badge](https://img.shields.io/badge/License-%20${renderLicenseBadge(data.license)}


        ## Description
        ${data.Description}

        
        - ${data.Motivation}
        - ${data.solve}
        - ${data.Learn}

        ## Installation

        - ${data.Installation}
           

        ## Usage

        - ${data.Usage}


      ##License
        -    ${renderLicenseSection(data.license)}
        -t   his is the license link!!!
                   ${renderLicenseLink(data.license)}
`;
}

export default generateMarkdown;

