public class VariableandDataTypesEx {

    public static void main(String[] args) {
        int num =15;
        float fnum = 15.50f;
        double dnum = 16.50;
        boolean isInterersting  = true;
        char singleChar='h';
        long numbers=99991112;
        //Non Primitive Data Types
        String firstName="John";
        int arr[] =new int[4];// initialization of the array
        //Assigning the values;
        arr[0]=1;
        arr[1]=2;
        arr[2]=3;
        arr[3]=4;
        num = 25;

        //Typecasting --Widening
        int i=100;
        long l=i;
        float f=l;
        //Typecasting --Narrowing
        double d=100.04;
        long ll=(long)d;
        int ii=(int)ll;
        System.out.println(d);
        System.out.println(ll);
        System.out.println(ii);
    }
}
