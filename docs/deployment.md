# 部署指南

燕中科创实验室是无数据库依赖的 Next.js 15 App Router 站点。教程在构建时从仓库内 MDX 编译，运行时只需要 Node.js，不需要挂载内容目录或外部服务。

## 1. 发布前门槛

生产候选提交必须通过：

```bash
pnpm install --frozen-lockfile
pnpm release:check
```

检查内容包括 TypeScript、ESLint、UI 令牌、内容配对与 metadata、占位链接和 Next.js 生产构建。GitHub Actions 会对 `main` 和 Pull Request 重复执行同一组检查。

## 2. 环境变量

| 变量 | 必需 | 说明 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 生产必需 | 完整外部地址，默认 `https://lab.yanchuaner.cn`；用于 canonical、sitemap 与 robots |
| `NEXT_OUTPUT` | Docker 构建设置 | 值为 `standalone` 时生成独立 Node 运行包 |
| `PORT` | 运行时可选 | 容器内默认 `3000` |

站点没有密钥、数据库或管理员登录。不要为了未来功能提前加入空凭据。

## 3. Docker 构建

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://lab.yanchuaner.cn \
  -t yanzhong-lab:latest .
docker run --rm -p 3100:3000 yanzhong-lab:latest
```

检查：

```bash
curl --fail http://127.0.0.1:3100/api/health
curl --fail http://127.0.0.1:3100/sitemap.xml
```

健康接口应返回 `status: ok`。内容和站点 URL 在构建时确定；更改域名后要重新构建镜像。

## 4. Nginx 反向代理

```nginx
server {
    listen 80;
    server_name lab.yanchuaner.cn;

    location / {
        proxy_pass http://127.0.0.1:3100;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

配置生效前运行 `nginx -t`。HTTPS 使用现有服务器的证书签发与续期流程，不在仓库保存证书或私钥。

## 5. 更新与回滚

1. 在 CI 通过的提交上构建带提交哈希的镜像，例如 `yanzhong-lab:660e424`。
2. 启动新容器并在本机端口检查首页、教程、项目、sitemap 和健康接口。
3. 切换 Nginx 上游后执行外部冒烟检查。
4. 保留上一个镜像；出现回归时把上游切回旧容器。

内容与代码在同一提交中，因此回滚镜像也会同时回滚教程，不存在数据库迁移风险。

## 6. 暑期统一发布

当前阶段可以持续合并并部署到仅内部可见的预览环境，但公开宣布前应与其他子域统一检查：域名解析、HTTPS、页脚归属、隐私边界、移动端、仓库链接和主站生态入口。不要因为技术部署完成就提前对外宣传。
