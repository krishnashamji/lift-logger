import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const ExerciseCard = () => {
    const sets = [1, 2]; // dummy data for now

    return (
        <View style={styles.card}>
            {/* Exercise Name + Delete */}
            <View style={styles.rowOne}>
                <TextInput
                    style={styles.input}
                    placeholder="Type exercise name"
                    placeholderTextColor="#aaa"
                />
                <Button title="Delete" onPress={() => { }} />
            </View>

            {/* Set Header */}
            <View style={styles.rowTwo}>
                <Text>Set</Text>
                <Text>Target Reps</Text>
            </View>

            {/* Set Rows */}
            {sets.map((setNum, idx) => (
                <View key={idx} style={styles.rowThree}>
                    <View style={styles.rowTwo}>
                        <Text>{setNum}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. 8-10"
                            placeholderTextColor="#aaa"
                        />
                    </View>
                    <Button title="x" onPress={() => { }} />
                </View>
            ))}

            {/* Add Set */}
            <View style={styles.rowThree}>
                <Button title="Add Set" onPress={() => { }} />
            </View>
        </View>
    );
};

export default function HomeScreen() {
    const [workouttitle, setWorkoutTitle] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Workout Title"
                placeholderTextColor="#aaa"
                style={styles.input}

            />
            <ExerciseCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        color: '#000',
        backgroundColor: "#ffffff",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 16,
    },
    card: {
        width: '100%',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        gap: 8,
    },
    rowOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
    rowTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
    },
    rowThree: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
});



// Data structure
// {
//     workoutTitle: "Leg Day",
//     exercises: [
//       {
//         exerciseName: "Squat",
//         sets: [{ targetReps: "8-10" }, { targetReps: "10-12" }]
//       },
//       {
//         exerciseName: "Lunges",
//         sets: [{ targetReps: "10" }]
//       }
//     ]
//   }
  