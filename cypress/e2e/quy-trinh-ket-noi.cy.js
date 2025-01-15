describe("Form Submission Test", () => {
  it("Should fill out and submit the consultation form", () => {
    // Visit the specified page
    cy.visit("https://staging.spacet.vn/quy-trinh-ket-noi");

    // Fill out the form
    cy.get('input[placeholder="Điền tên đầy đủ của bạn"]').type("Nguyễn Văn A"); // Full Name
    cy.get('input[placeholder="Nhập số điện thoại"]').type("0987654321"); // Phone Number
    cy.get('input[placeholder="Nhập địa chỉ email"]').type("test@example.com"); // Email Address

    // Submit the form
    cy.contains("Đăng kí tư vấn").click();
  });
});
