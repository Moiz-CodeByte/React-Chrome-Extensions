# React Chrome Extensions 

This repository hosts two Chrome browser extensions designed to enhance productivity by offering image background removal and website URL visit counting. Both extensions are built using React.

## Extensions:

### 1. Image Background Remover

- **Description:** This React-based extension allows users to remove the background from an image. The extension popup lets users input an image, which is then processed by the website [removal.ai](https://removal.ai/#/), and the background is automatically removed and downloaded.
- **Usage:**
  1. Click on the extension icon to open the popup.
  2. Input the image for background removal.
  3. The extension will open [removal.ai](https://removal.ai/#/) and automatically download the image with the background removed.

### 2. Website URL Visit Counter

- **Description:** This React-based extension counts the number of times specified URLs are visited during the browser session.
- **Usage:**
  1. Click on the extension icon to open the popup.
  2. Add the URLs you want to track.
  3. The extension will count and display the number of visits to each URL for the current browser session.

## How to Run:

1. **Clone the Repository:** Clone this repository to your local machine using `git clone`.
2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install the required dependencies.
3. **Build the Extensions:**
   - For each extension, navigate to its directory and run `npm run build` to create the production build.
4. **Install Extensions in Chrome:**
   - Open Chrome browser.
   - Navigate to `chrome://extensions/`.
   - Enable Developer mode by toggling the switch in the top-right corner.
   - Click on "Load unpacked" and select the `build` directory of the respective extension.
5. **Usage:**
   - After installing the extensions, you can use them by clicking on their respective icons in the Chrome toolbar.
   - Follow the on-screen instructions for each extension as described above.

## Note:
- Ensure you review and comply with the terms of service of the websites used by the extensions.
