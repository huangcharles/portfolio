import java.util.Set;
import java.util.TreeSet;
import java.util.Arrays;
import java.util.Scanner;
import static java.lang.System.*;

class OddEvenSets
{
  private Set<Integer> odds=new TreeSet<Integer>();
  private Set<Integer> evens=new TreeSet<Integer>();

  public OddEvenSets(String input)
  {
    String [] str=input.split(" ");
    Set<String> uniques = new TreeSet<String>();
    for (String s : str) {
      uniques.add(s);
    }
    for (String s : uniques) {
      if (parseInt(s)%2==0) {
        evens.add(parseInt(s));
      } else {
        odds.add(parseInt(s));
      }
    }
  }



  String toString()
  {
    return "ODDS : " + odds + "\nEVENS : " + evens + "\n\n";
  }
}
