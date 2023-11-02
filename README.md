# ReflectedParams
Simple chrome extension that checks a URL with params and then sees if it is reflected in the body of the response

## Features
- Parameter Reflection Detection: Automatically detects if any URL parameter is reflected in the web page content.
- Icon Indicator: The extension icon changes when a reflected parameter is detected, providing a clear visual cue.
- Dynamic Observation: Uses MutationObserver to monitor dynamic changes in web page content.
  
## Installation
### Manual Installation (Developer Mode)
1. Download or clone this repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Enable 'Developer mode' at the top right.
4. Click on 'Load unpacked' and select the extension directory.
5. Pin the extension to you favorite extensions
   
## Usage
After installing the extension, navigate to any website. The extension will automatically check for URL parameters and monitor if they are reflected in the webpage content. If a reflection is detected, the extension icon will change.

## Contributing
Contributions to the Reflection Testing Tool are welcome!

## License
This project is licensed under the MIT License.


