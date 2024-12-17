// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let Badge;
  if(license == 'MIT'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20MIT%20License-red)";
  }else if(license == 'Apache License 2.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20Apache%202.0-green)";
  }else if(license == 'GNU General Public License v3.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20GNU%20Public%20v3.0-green)";
  }else if(license == 'BSD 2-Clause "Simplified"'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20BSD%202-blue)";
  }else if(license == 'BSD 3-Clause "New" or "Revised"'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20BSD%203-purple)";
  }else if(license == 'Boost Software License 1.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20Boost%20Software-pink)";
  }else if(license == 'Creative Commons Zero v1.0 Universal'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20Commons%20Zero%20v1.0-yellow)";
  }else if(license == 'Eclipse Public License 2.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20Eclipse%20Public%202.0-red)";
  }else if(license == 'GNU Affero General Public License v3.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20GNU%20Affero%20Public%20v3.0-blue)";
  }else if(license == 'GNU General Public License v2.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20GNU%20Public%20v2.0-purple)";
  }else if(license == 'GNU Lesser General Public License v2.1'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20GNU%20Lesser%20Public%20v2.0-pink)";
  }else if(license == 'Mozilla Public License 2.0'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20Mozilla%202.0-yellow)";
  }else if(license == 'The Unlicense'){
       Badge = "## License\n![Static Badge](https://img.shields.io/badge/License-%20The%20Unlicense-green)";
  }else if(license == 'None'){
       Badge = '';
  }
  return Badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {
  
  let Link;
  if(license == 'MIT'){
       Link = "- https://mit-license.org";
  }else if(license == 'Apache License 2.0'){
       Link = "- https://pitt.libguides.com/openlicensing/apache2";
  }else if(license == 'GNU General Public License v3.0'){
       Link = "- https://www.gnu.org/licenses/gpl-3.0.en.html";
  }else if(license == 'BSD 2-Clause "Simplified"'){
       Link = "- https://opensource.org/license/bsd-2-clause";
  }else if(license == 'BSD 3-Clause "New" or "Revised"'){
       Link = "- https://choosealicense.com/licenses/bsd-3-clause/";
  }else if(license == 'Boost Software License 1.0'){
       Link = "- https://www.boost.org/LICENSE_1_0.txt";
  }else if(license == 'Creative Commons Zero v1.0 Universal'){
       Link = "- https://spdx.org/licenses/CC0-1.0";
  }else if(license == 'Eclipse Public License 2.0'){
       Link = "- https://www.eclipse.org/legal/epl-2.0/";
  }else if(license == 'GNU Affero General Public License v3.0'){
       Link = "- https://www.gnu.org/licenses/agpl-3.0.en.html";
  }else if(license == 'GNU General Public License v2.0'){
       Link = "- https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  }else if(license == 'GNU Lesser General Public License v2.1'){
       Link = "- https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html";
  }else if(license == 'Mozilla Public License 2.0'){
       Link = "- https://www.mozilla.org/en-US/MPL/";
  }else if(license == 'The Unlicense'){
       Link = "- https://choosealicense.com/licenses/unlicense/";
  }else if(license == 'None'){
       Link = '';
  }
  return Link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let LSection;
  if(license != 'None'){
    LSection = `\n## License Section\n - I am using the ${license} license`
  }else
  LSection == ''
  return LSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
        # ${data.Title}
 
          
${renderLicenseBadge(data.license)}

   \n  ## Table of Contents

[Description of the app](#description)
\n
[Installation of the app](#installation)
\n
[Usage of app](#usage)
\n
[License Badge](#license)
\n
[license section](#license-section)
\n
[test](#test)
\n
[Guidlines for the app](#guide-lines)
\n
[Contact information](#contact)
         

    \n ## Description
        ${data.Description}

        
          - ${data.Motivation}
          - ${data.solve}
          - ${data.Learn}

    \n  ## Installation

          - ${data.Installation}
           

    \n  ## Usage

          - ${data.Usage}







        \n ${renderLicenseSection(data.license)}
             
        ${renderLicenseLink(data.license)}

     


     \n  ## Test
          - ${data.TestInstructions}

     \n ## Guide Lines
          - ${data.Guidelines}

    \n  ## Contact

          - ${data.GitHub}

          -${data.Email}

`;
}

export default generateMarkdown;


