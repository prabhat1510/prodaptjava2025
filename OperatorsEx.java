public class OperatorsEx {

    public static void main(String[] args) {
        int p=4;
        /**
         *  p=4
         *  p++  p=4
         *  +
         *  ++p = 4+6 =11
         *  11 + 5 =16
         */
        int q = p++ + ++p + p--;
        System.out.println(q);
    }
}
