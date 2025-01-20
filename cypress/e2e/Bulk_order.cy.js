describe("Test Form Popup", () => {
  it("Điền thông tin vào form popup", () => {
    // Truy cập vào trang
    cy.visit("https://staging.spacet.vn/noithatgiasi");
    // Chờ popup xuất hiện
    cy.wait(12000);
    // Tìm popup container và điền form bên trong nó
    cy.get(".MuiDialog-container").within(() => {
      cy.get('input[placeholder="Điền tên đầy đủ của bạn"]').type(
        "Nguyễn Văn A"
      );
      cy.get('input[placeholder="Nhập số điện thoại"]').type("0123456789");
      cy.get('input[placeholder="Nhập địa chỉ email"]').type(
        "example@gmail.com"
      );
      cy.get('input[placeholder="Nhập sản phẩm (ví dụ: ghế văn phòng màu đen)"]').type(
        "Ghế văn phòng"
      );
      // Click nút đăng ký
      cy.contains("Đăng kí đặt hàng").click();
    });
  });
});