import static java.lang.System.*;
import java.util.*;

void setup(){
  UniquesDupes u=new UniquesDupes();
  println(u.getUniques("a b c d e f g h a b c d e f g h i j k"));
    println(u.getDupes("a b c d e f g h a b c d e f g h i j k"));

}
