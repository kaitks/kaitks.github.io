---
layout: single
title: Cấu trúc dự án Nodejs cơ bản
categories:
  - nodejs
---

## Định nghĩa

```bash
.
├── README.md
├── app
│   ├── app.js
│   ├── bin
│   │   └── www                 -> entry point của http server
│   ├── config                  -> thiết lập của các service trong hệ thống
│   │   └── db.js
│   ├── domain                  -> chứa từng cụm business logic
│   │   └── my_domain
│   │       ├── controller      -> chỉ mang nhiệm vụ điều hướng, render view, gọi service
│   │       ├── model           -> chứa class của các lớp liên quan đến db
│   │       ├── persistent      -> chứa logic đọc ghi dữ liệu, tương tác trực tiếp với DB
│   │       ├── router.js       -> entry point của cụm business logic hiện tại
│   │       ├── service         -> chứa business logic, tương tác với persistent layer hoặc các service khác
│   │       └── view
│   ├── lib
│   │   └── formater.js         -> chứa những utility module chung chung
│   ├── middleware              -> chứa middleware dùng chung cho app
│   │   └── auth.js
│   ├── public
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets

│   │       └── style.css
│   ├── router.js               -> tất cả các router con trong domain sẽ được gom vào đây
│   ├── service                 -> chứa business logic liên quan toàn app
│   │   └── db.js
│   └── view
│       ├── error.pug
│       ├── index.pug
│       └── layout.pug
├── manifest-dark-dev.yml
├── manifest-dev.yml
├── manifest-prod.yml
├── manifest.yml
└── package.json
```
