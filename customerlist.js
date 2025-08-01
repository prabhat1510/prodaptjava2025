    /** document.getElementById("customerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        // Display a message
        var message = "Customer Added: " + name + ", " + email + ", " + phone;
        document.getElementById("message").innerText = message;

        // Clear form fields
        document.getElementById("customerForm").reset();
    });*/

    function addCustomer() {
        // This function is called when the form is submitted
        // The actual logic is handled in the event listener above
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        validateForm(name,email,phone);
        // Display a message in the console
        if (!name || !email || !phone) {
            console.log("Please fill in all fields.");
            
        }   
        else {
            
            console.log("Customer Added: " + name + ", " + email + ", " + phone);
            // Here you can add code to save the customer data, e.g., to a database 
        }   
    }

    function validateForm(name, email, phone) {
        // This function validates the form fields
        if (!name || !email || !phone) {
            alert("Please fill in all fields.");
            return false; // Prevent form submission
        }
        return true; // Allow form submission
    }
        if (!name || !email || !phone) {
            alert("Please fill in all fields.");
            return false; // Prevent form submission
        }
        return true; // Allow form submission
    }