import java.util.Arrays;
import java.util.Scanner;

public class SortArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Take array size
        System.out.print("Enter the number of elements: ");
        int size = scanner.nextInt();

        int[] numbers = new int[size];

        // Take array elements as input
        System.out.println("Enter " + size + " numbers:");
        for (int i = 0; i < size; i++) {
            numbers[i] = scanner.nextInt();
        }

        // Display original array
        System.out.println("Original Array: " + Arrays.toString(numbers));

        // Sort the array
        Arrays.sort(numbers);

        // Display sorted array
        System.out.println("Sorted Array: " + Arrays.toString(numbers));

        scanner.close();
    }
}
