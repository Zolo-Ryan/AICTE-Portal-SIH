#include <iostream>
#include <vector>

using namespace std;

void performOperations(vector<int>& parent, vector<int>& weights, vector<int>& operation_sequence) {
    int n = parent.size();
    vector<long long> result(n);

    for (int i = 0; i < n; ++i) {
        result[i] = weights[i];
    }

    for (int node : operation_sequence) {
        node--; // Convert 1-based indexing to 0-based indexing

        if (node == 0) {
            continue; // Skip root node, as it has no parent
        }

        int parentNode = parent[node] - 1;
        result[parentNode] += result[node];
        result[node] = 0;
    }

    for (int i = 0; i < n; ++i) {
        cout << result[i] << " ";
    }
    cout << endl;
}

int main() {
    vector<int> parent = {-1, 1, 1, 2, 2, 5};
    vector<int> weights = {5, 1, 2, 5, 6, 3};
    vector<int> operation_sequence = {2, 5, 6, 1};

    performOperations(parent, weights, operation_sequence);

    return 0;
}
