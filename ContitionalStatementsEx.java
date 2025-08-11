public class ContitionalStatementsEx {
    public static void main(String[] args) {
        int number;
        number= Integer.parseInt(args[0]);
        if(number > 0 ){
            System.out.println("POSITIVE");
        }else if(number < 0){
            System.out.println("NEGATIVE");
        }else{
            System.out.println("ZERO");
        }
    }
}
