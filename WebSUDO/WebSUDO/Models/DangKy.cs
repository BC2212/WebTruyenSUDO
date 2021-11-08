using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSUDO.Models
{
    public class DangKy
    {
        [Display(Name = "Email: ")]
        public string Email { get; set; }

        [Display(Name = "Mật khẩu: ")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "XAc nhận mật khẩu: ")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Mật khẩu và xác nhận mật khẩu phải giống nhau")]
        public string ConfirmPassword { get; set; }
    }
}
