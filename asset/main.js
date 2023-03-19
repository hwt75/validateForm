/* 
    Cho trước template đăng ký dùng hàm Validator để kiểm tra giá trị nhập vào các trường
    viết code vào hàm Validator bên dưới để đáp ứng được các yêu cầu sau
    Level 0: Đọc hiểu được code của file index.html, main.css và viết code vào hàm submitBtn.onclick bên dưới để hiển thị ra dòng chữ "submit" ở bảng console sau khi bấm nút submit
    Level 1: Lấy ra giá trị đã nhập vào và hiển thị trong bảng console khi bấm vào nút button 
    Level 2: Sau khi bấm nút submit thì kiểm tra các trường đã nhập ký tự hay chưa nếu chưa thì hiện lên cảnh báo ở bảng console
    level 3: Sau khi bấm nút submit thì kiểm tra mật khẩu đủ 8 ký tự, và email có đúng định dạng, nếu chưa đúng thì hiện lên cảnh báo bảng console
    Level 4: Sau khi bấm nút submit nếu có bất kỳ trường nào sai với các yêu cầu trên thì hiện lên cảnh báo đỏ ngay bên dưới trường đó
*/

// Hàm Validator sẽ nhận đối số là tên class của form submit và thực hiện các chức năng trên

const Validator = (formClassName) => {
    // lấy dữ liệu của nút submit
    const submitBtn = document.querySelector('.form-submit')
    // Xử lý hành động khi bấm vào nút submit
    submitBtn.onclick = ()=>{
        // Ngăn chặn hành động mặc định của form khi bấm nút submit thử xóa dòng này và cảm nhận sự khác biệt
        event.preventDefault() 
        
    };
    
}