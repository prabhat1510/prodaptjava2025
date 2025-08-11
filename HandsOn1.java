public class HandsOn1  {
    public static void main(String[] args) {
        System.out.println("*********Start: Table of 10 ******************");
        int num =10;
        for(int j=1;j<=num;j++){
            System.out.println(num+" * "+j+" = "+num*j);
        }
        System.out.println("*********End: Table of 10 ******************");
        System.out.println("**********Fibonacci Series ******************");
        int n = 10; // Number of terms to display
        int first = 0, second = 1;

        System.out.println("Fibonacci Series up to " + n + " terms:");

        for (int i = 1; i <= n; i++) {
            System.out.print(first + " ");

            // Calculate the next term
            int next = first + second;
            first = second;
            second = next;
        }
        System.out.println("********End: Fibonacci Series ******************");
    }
}
