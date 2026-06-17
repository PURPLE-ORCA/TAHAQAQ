export function generateOtpEmailHtml(token: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexVex sign-in code</title>
  <style>
    body { margin: 0; padding: 0; font-family: Inter, Arial, sans-serif; background: #f6f3ff; color: #18111f; }
    .wrap { width: 100%; padding: 40px 0; }
    .card { max-width: 480px; margin: 0 auto; background: #ffffff; border: 1px solid #eadfff; border-radius: 18px; overflow: hidden; box-shadow: 0 24px 60px rgba(87, 42, 163, 0.14); }
    .head { padding: 28px 30px; background: #6d28d9; color: white; }
    .brand { margin: 0; font-size: 20px; letter-spacing: -0.02em; }
    .body { padding: 34px 30px; text-align: center; }
    .eyebrow { margin: 0 0 10px; color: #6b5f7c; font-size: 14px; }
    .code { display: inline-block; margin: 18px 0; padding: 16px 22px; border-radius: 14px; background: #f3e8ff; color: #581c87; font: 800 36px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 10px; }
    .hint { margin: 10px 0 0; color: #766985; font-size: 13px; }
    .foot { padding: 20px 30px; background: #faf8ff; color: #8a7c99; font-size: 12px; text-align: center; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="head"><h1 class="brand">NexVex Boilate</h1></div>
      <div class="body">
        <p class="eyebrow">Your sign-in code</p>
        <div class="code">${token}</div>
        <p class="hint">Expires in 15 minutes. If this was not you, ignore this email.</p>
      </div>
      <div class="foot">Ship faster. Auth without circus wiring.</div>
    </div>
  </div>
</body>
</html>`;
}

export function generateOtpEmailText(token: string): string {
  return `Your NexVex sign-in code is ${token}. It expires in 15 minutes.`;
}
