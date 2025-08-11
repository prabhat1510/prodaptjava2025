public class EmployeeMain {
    public static void main(String[] args) {
        Employee emp1 = new Employee(1, "Emp1");
        Employee emp2 = new Employee(2, "Emp2");
        Employee emp3 = new Employee(3, "Emp3");
        Employee emp4 = new Employee(4, "Emp4");
        //Employee emp3 = new Employee();
        Employee[] arrayOfEmployees = new Employee[4];
        arrayOfEmployees[0] = emp1;
        arrayOfEmployees[1] = emp2;
        arrayOfEmployees[2] = emp3;
        arrayOfEmployees[3] = emp4;
        System.out.println("Array of Employees: "+ arrayOfEmployees);

        //For Each Loop
        for(Employee e: arrayOfEmployees){
            System.out.println(e);
        }

        int arr[]={10,20,30,40,50,60};
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
        System.out.println("******************************");
        //for-each loop
        for(int i : arr){
            System.out.println(i);
        }

    }
}
