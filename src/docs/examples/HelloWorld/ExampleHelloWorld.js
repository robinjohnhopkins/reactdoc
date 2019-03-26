import React from 'react';
//import HelloWorld from 'ps-react/HelloWorld/HelloWorld';
// This is added to webpack.config.js
// 'ps-react': path.resolve(__dirname, '../src/components')
// import HelloWorld from '../../../components/HelloWorld/HelloWorld';

import HelloWorld from 'ps-react/HelloWorld';
// this is possible if you add index.js with 
//  export {default} from './HelloWorld';

/** Custom message */
export default function ExampleHelloWorld() {
  return <HelloWorld message="Pluralsight viewers!" />
}
