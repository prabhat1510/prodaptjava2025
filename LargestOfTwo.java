import java.util.Scanner;

public class LargestOfTwo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking two numbers as input
        System.out.print("Enter first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter second number: ");
        int num2 = scanner.nextInt();

        // Find the largest number
        if (num1 > num2) {
            System.out.println(num1 + " is the largest number.");
        } else if (num2 > num1) {
            System.out.println(num2 + " is the largest number.");
        } else {
            System.out.println("Both numbers are equal.");
        }

        scanner.close();
    }
}
