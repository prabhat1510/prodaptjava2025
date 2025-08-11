public class HelloWorld {

    public static void main(String[] args) {

        System.out.println(args[0]);
        System.out.println(args[1]);
        System.out.println("Hello World!");
        //printHelloWorld();
        HelloWorld helloWorld = new HelloWorld();
        helloWorld.printHelloWorld();
    }

    public void printHelloWorld() {
        System.out.println("Hello World! from non static method");
    }
}
