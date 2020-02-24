import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import static java.lang.System.*;


void setup() {
  OddEvenSets u=new OddEvenSets("1 5 9 4 6 8 12");
  println(u);
  
  OddEvenSets v=new OddEvenSets("3 5 7 17 29 4 6 56 72");
  println(v);

  OddEvenSets t=new OddEvenSets("3 6 12 2 28 6");
  println(t);
  
    OddEvenSets q=new OddEvenSets("4 4 4 4 4 4 4 4 ");
  println(q);
  
      OddEvenSets r=new OddEvenSets("1 1 1 1 1 1 1 1 1 1 1");
  println(r);
  
        OddEvenSets p=new OddEvenSets("1 2 3 4 5 6 7 8 9 ");
  println(p);
}
