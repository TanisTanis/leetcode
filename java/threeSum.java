import java.util.*;

class ThreeSum {
  public static List<Integer[]> threeNumberSum(int[] array, int targetSum) {
    Arrays.sort(array);
		List<Integer[]> result = new ArrayList<Integer[]>();

		for (int i = 0; i < array.length - 2; i++) {
			int left = i + 1;
			int right = array.length - 1;

			while(left < right) {
				int sum = array[i] + array[left] + array[right];
				if (sum == targetSum) {
					Integer[] triplet = {array[i], array[left], array[right]};
					result.add(triplet);
					left++;
					right--;
				} else if (sum > targetSum) {
					right--;
				} else if (sum < targetSum) {
					left++;
				}
			}
		}
    return result;
  }
}