describe("Kiểm thử đăng nhập trên trang Spacet", () => {
  it("Đăng nhập bằng Số điện thoại và Mật khẩu", () => {
    // 1. Truy cập trang chủ Spacet
    cy.visit("https://spacet.vn/");

    // 2. Tìm và nhấp vào nút Đăng nhập
    cy.contains("Đăng nhập").click();

    // 3. Tìm và nhấp vào nút "Tiếp tục với Số điện thoại"
    cy.contains("Tiếp tục với Số điện thoại").click();

    // 4. Nhập Số điện thoại và Mật khẩu vào form đăng nhập
    cy.get('input[placeholder="Số điện thoại"]').type("0935353535"); // Nhập số điện thoại
    cy.get('input[placeholder="Mật khẩu"]').type("123456"); // Nhập mật khẩu

    // 5. Tìm và nhấp vào nút Đăng nhập
    cy.get(".btn.btn-auth").click();

    // 6. Kiểm tra chuyển hướng hoặc xác thực đăng nhập thành công (tuỳ thuộc vào logic của trang)
    //cy.url().should("include", "/dashboard"); // Giả sử sau khi đăng nhập sẽ chuyển hướng đến "/dashboard"
  });
});
