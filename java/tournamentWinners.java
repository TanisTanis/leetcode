import java.util.*;

class TournamentWinner {

  public String tournamentWinner(ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {

    HashMap<String, Integer> winners = new HashMap<String, Integer>();

    for (int i = 0; i < competitions.size(); i++) {
      String winner = "";
      int winCondition = results.get(i);
      if (winCondition == 1) {
        winner = competitions.get(i).get(0);
      } else {
        winner = competitions.get(i).get(1);
      }
      winners.put(winner, winners.getOrDefault(winner, 0) + 3);
    }

    int maxPoints = 0;
    String winningTeam = "";

    for (String teamName : winners.keySet()) {
      int points = winners.get(teamName);
      if (points > maxPoints) {
        maxPoints = points;
        winningTeam = teamName;
      }
    }
    return winningTeam;
  }
}