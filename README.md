# Photos of This Name

## _React Native app for browsing Flickr images based on selected Contact_

## Features

-- ✨Runs on iOS ✨

- Select Contact from device contact list
- Select Contact trough Search filter
- Display Flickr image results tagged by Contact name
- Display additional image informations
- Navigate to OS browser to diplay full-sized image
## Installation

PhotosOfThisName requires [Node.js](https://nodejs.org/) v10+ and [watchman] to run

```sh
cd PhotosOfThisName
npm i
pod install
```
## Starting project

```sh
cd PhotosOfThisName
npx react-native start
npx react-native run-ios
```
## Available Scripts

In the project directory, you can run:

### `npx react-native start`

Runs Metro bundler on port 8081. If another process is already using that port, you can either terminate that process, or change the port that the bundler uses.

### `npx react-native run-ios`

Runs iOS app on default simulator. Application also can be launched from xCode by selecting desired simulator or device and triggering run UI control.

### `npx jest`

Launches the test runner.
### `pod install`

Install iOS specific dependencies

## Possible setup issues and tested solutions

Issue with `react-native-vector-icons` on xCode, duplicate entries in build phase after auto linking (https://lifesaver.codes/answer/error-multiple-commands-produce-in-xcode-10).


## Dependencies

| Dependency | README |
| ------ | ------ |
| react-native-contacts | [https://github.com/morenoh149/react-native-contacts] |
| react-native-vector-icons | [https://github.com/oblador/react-native-vector-icons] |
| prop-types | [https://www.npmjs.com/package/prop-types] |
| react-redux | [https://react-redux.js.org/introduction/getting-started] |
| react-navigation | [https://reactnavigation.org/docs/getting-started/] |

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
To troubleshoot issues with Metro Bundler, check (https://reactnative.dev/docs/troubleshooting).
To learn more about library `react-native-contacts`, check (https://github.com/morenoh149/react-native-contacts).

## License

MIT