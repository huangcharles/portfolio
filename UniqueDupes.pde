
import java.util.Set;
import java.util.TreeSet;
import java.util.Arrays;
import java.util.ArrayList;
import static java.lang.System.*;


 class UniquesDupes{
  public  Set<String> getUniques(String input){
    String [] str=input.split(" ");
    Set<String> uniques = new TreeSet<String>();
    for(String s: str){
      uniques.add(s);
    }
    return uniques;
  }

  public  Set<String> getDupes(String input){
   String [] str=input.split(" ");
   Set<String> dupes = new TreeSet<String>();

    Set<String> uniques = new TreeSet<String>();
    for(String s: str){
      if(uniques.add(s)==false){
        dupes.add(s);
      }
    }
    return dupes;
    }

  
}
