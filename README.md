# AWS Amplify を使用した検証用のプロジェクト

現在のコードは Amplify v5 でCloudWatchに直接ログを出力する処理の検証。

ルートディレクトリに配置する .env の内容

```ini
VITE_AWS_REGION="your region"
VITE_IDENTITY_POOL_ID="cognito identity pool ID"
VITE_LOG_GROUP_NAME="CloudWatch log group name"
```
