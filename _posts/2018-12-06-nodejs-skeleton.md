---
layout: single
title: Cấu trúc dự án Nodejs cơ bản
categories:
  - nodejs
---

## Lời nói đầu

Nodejs là một ngôn ngữ rất linh hoạt, vì thế có rất nhiều cách đề ta có thể tổ chức code cho team của mình.

Tuy nhiên, vì Nodejs rất linh hoạt, nên vấn đề lớn nhất khi làm một dự án Nodejs là mỗi người sẽ có một cách sử dụng Nodejs khác nhau.

Để làm việc chung với nhau được hiệu quả, cần phải có giải pháp để thống nhất cách viết, cách format, cách tổ chức code trong dự án.

## Thống nhất cách tổ chức code

Hãy thống nhất cách đặt tên những layer trong dự án. Một dự án cơ bản thường sẽ có 3 tầng MVC (Model, Control, View).

Đối với Nodejs thì sẽ có thêm một số khái niệm phổ biến khác như Middleware.

Ngoài ra những layer chuyên chứa business logic như Service, config của dự án như Config cũng là những phần thường xuyên suất hiện.

Đối với các layer phổ biến như trên, team nên thống nhất vị trí để các layer này trong cây thư mục dự án.

Các bạn có thể làm bằng cách vẽ cây thư mục như dưới.

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

## Thống nhất cách format

Phổ biến nhất trong cộng đồng Nodejs có lẽ là [Prettier](https://prettier.io/docs/en/index.html).

Điểm hay nhất của Prettier so với các formatter khác là bạn chỉ cần install và sử dụng, không cần phải config cách format.

Tất cả format rule của Prettier đều đã được thảo luận và chọn lựa kỹ càng bởi cộng đồng, vì thế bạn không cần phải tìm hiểu `what work best for everyone`, bởi vì bài toán này đã được giải quyết bởi Prettier.

## Thống nhất cách code

Để thống nhất cách code, bạn sử dụng một công cụ khác là linter. Trong cộng đồng Nodejs thì eslint là linter phổ biến nhất.

Khác với Prettier, eslint khống có default rule. Bạn cần phải tự mình thiết lập lint rule cho eslint thì eslint mới có tác dụng.

Rất may là eslint đã có sẵn một số bộ profile. Profile là một bộ thiết lập các config, các lint rule. Bạn chỉ cần include và sử dụng.

Với cá nhân mình thì mình sử dụng profile của Airbnb. Đây là một profile phổ biến và thiên hướng về Functional Programming.

Khi sử dụng eslint, các bạn cần chú ý cách config để eslint và Prettier không xung đột. Về mặt nguyên lý thì vai trò của Eslint và Prettier khác nhau:

- Eslint để quy định coding convention, ví dụ như: khi nào dùng `const`, khi nào dùng `let`; return phải consistence; khuyến khích dùng `arrow function` thay cho `function`, ...

- Prettier quy định coding style, ví dụ như: indent bao nhiêu space, có cần `;` ở cuối mỗi statement hay không, ...

Bạn xem thêm cách config eslint sao cho tương thích với Prettier [tại đường link này nhé](https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration).

Bài viết đã hết rồi. Chúc các bạn triển khai Nodejs thành công cho team mình nhé.
