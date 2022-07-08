const deleteEmployeeform = document.getElementById("deleteEmployeeform");
console.log(deleteEmployeeform);
deleteEmployeeform.addEventListener("submit", async (event) => {
   console.log("first");
   event.preventDefault();
   const id = deleteEmployeeform.getAttribute("data-emp-id");
   const result = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
      headers: {
         "content-type": "application/json",
      },
   }).then((res) => res.json());

   console.log(result);
   if (result.status == "success") {
      alert("Employee Delete Successfully");
      location.replace("/");
   } else {
      alert(result.error);
   }
});

const deleteEmployee = (id) => {
   deleteEmployeeform.dataset.empId = id;
};

const add_employee_form = document.getElementById("add_employee");

add_employee_form.addEventListener("submit", async (event) => {
   event.preventDefault();
   let name = document.getElementById("add_name");
   let email = document.getElementById("add_email");
   let address = document.getElementById("add_address");
   let phone = document.getElementById("add_phone");

   const result = await fetch("/api/employee", {
      method: "POST",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify({
         name: name.value,
         email: email.value,
         address: address.value,
         phone: phone.value,
      }),
   }).then((res) => res.json());

   console.log(result);
   if (result.status == "success") {
      alert("Employee Added Successfully");
      name.value = "";
      email.value = "";
      address.value = "";
      phone.value = "";

      location.reload();
   } else {
      alert(result.error);
   }
});




const edit_employee_form = document.getElementById("edit_employee");
let edit_name = document.getElementById("edit_name");
let edit_email = document.getElementById("edit_email");
let edit_address = document.getElementById("edit_address");
let edit_phone = document.getElementById("edit_phone");

edit_employee_form.addEventListener("submit", async (event) => {
   event.preventDefault();
   console.log(edit_employee_form.attributes);
   const id = edit_employee_form.getAttribute("data-emp-id");
   const result = await fetch(`/api/update/${id}`, {
      method: "PUT",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify({
         name: edit_name.value,
         email: edit_email.value,
         address: edit_address.value,
         phone: edit_phone.value,
      }),
   }).then((res) => res.json());

   console.log(result);
   if (result.status == "success") {
      alert("Employee Updated Successfully");
      edit_name.value = "";
      edit_email.value = "";
      edit_address.value = "";
      edit_phone.value = "";
      location.replace("/");
   } else {
      alert(result.error);
   }
});

const editEmployee = async (id) => {
   // console.log("id: ", id);
   const result = await fetch(`/api/getemployee?id=${id}`).then((res) =>
      res.json()
   );

   edit_employee_form.dataset.empId = id;

   console.log(result);
   if (result.status == "success") {
      const data = result.data;
      edit_name.value = data.name;
      edit_email.value = data.email;
      edit_address.value = data.address;
      edit_phone.value = data.phone;
   } else {
      alert(result.error);
   }
};



$(document).ready(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
       if (this.checked) {
          checkbox.each(function () {
             this.checked = true;
          });
       } else {
          checkbox.each(function () {
             this.checked = false;
          });
       }
    });
    checkbox.click(function () {
       if (!this.checked) {
          $("#selectAll").prop("checked", false);
       }
    });
 });