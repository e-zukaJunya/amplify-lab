import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Amplify, AWSCloudWatchProvider, Logger } from "aws-amplify";

// Amplifyの設定適用
export const AWS_CONFIG = {
  Auth: {
    region: import.meta.env.VITE_AWS_REGION,
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
  Logging: {
    region: import.meta.env.VITE_AWS_REGION,
    logGroupName: import.meta.env.VITE_LOG_GROUP_NAME,
    logStreamName: "sample",
  },
};
Amplify.configure(AWS_CONFIG);

export const logger = new Logger("frontend", "INFO");
Amplify.register(logger);
logger.addPluggable(new AWSCloudWatchProvider());

function App() {
  const [count, setCount] = useState(0);

  const putLog = () => {
    logger.info("info");
    logger.error("error");
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={putLog}>Put log</button>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
