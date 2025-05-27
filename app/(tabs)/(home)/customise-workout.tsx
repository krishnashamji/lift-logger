import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const ExerciseRow = ({ setId, setNum, targetReps, onChangeTargetReps, deleteSet }) => {
    return (
        <View style={styles.rowThree}>
            <View style={styles.rowTwo}>
                <Text>{setNum}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="8-10"
                    placeholderTextColor="#aaa"
                    onChangeText={onChangeTargetReps}
                    value={targetReps}
                    keyboardType="numeric"
                />
            </View>
            <Button title="x" onPress={() => deleteSet(setId)} />
        </View>
    )
}

const ExerciseCard = ({ cardId, exerciseName, onChangeExerciseName, deleteCard }) => {

    // UseStates
    const [sets, setSets] = useState([
        { id: uuidv4(), targetReps: '' },
        { id: uuidv4(), targetReps: '' }
    ]);

    // Handlers
    const handleAddSet = () => {
        return setSets([...sets, { id: uuidv4() }])
    }
    const handleDeleteSet = (id) => {
        const updatedSets = sets.filter(set => set.id !== id)
        return setSets(updatedSets)
    }
    const handleTargetRepsChange = (id, reps) => {
        const updatedSets = sets.map(set =>
            set.id === id ? { ...set, targetReps: reps } : set
        );
        setSets(updatedSets);
    };

    return (
        <View style={styles.card}>
            {/* Exercise Name + Delete */}
            <View style={styles.rowOne}>
                <TextInput
                    style={styles.input}
                    placeholder="Type exercise name"
                    placeholderTextColor="#aaa"
                    value={exerciseName}
                    onChangeText={onChangeExerciseName}
                    keyboardType="default"
                />
                <Button title="Delete" onPress={deleteCard} />
            </View>

            {/* Set Header */}
            <View style={styles.rowTwo}>
                <Text>Set</Text>
                <Text>Target Reps</Text>
            </View>

            {/* Set Rows */}
            {sets.map((set, index) => {
                return (
                    <ExerciseRow
                        key={set.id}
                        setId={set.id}
                        setNum={index + 1}
                        targetReps={set.targetReps}
                        onChangeTargetReps={(reps) => handleTargetRepsChange(set.id, reps)}
                        deleteSet={() => handleDeleteSet(set.id)}
                    />
                );
            })}

            {/* Add Set */}
            < View style={styles.rowThree} >
                <Button title="Add Set" onPress={handleAddSet} />
            </View>
        </View >
    );
};

export default function HomeScreen() {

    // UseStates
    const [workouttitle, setWorkoutTitle] = useState('')
    const [exerciseCards, setExerciseCards] = useState([
        { id: uuidv4(), exerciseName: '' },
        { id: uuidv4(), exerciseName: '' }
    ])

    // Handlers
    const handleAddExerciseCard = () => {
        return setExerciseCards([...exerciseCards, { id: uuidv4() }]);
    }
    const handleDeleteExerciseCard = (id) => {
        const updatedCards = exerciseCards.filter(card => card.id !== id)
        setExerciseCards(updatedCards)
    }
    const updateExerciseName = (id, name) => {
        const updatedExerciseName = exerciseCards.map(card => 
            card.id === id ? {...card, exerciseName: name } : card
        )
            setExerciseCards(updatedExerciseName)
    } 

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Workout Title"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={workouttitle}
                onChangeText={setWorkoutTitle}
                keyboardType="default"
            />
            {exerciseCards.map((card) => {
                return <ExerciseCard
                    key={card.id}
                    cardId={card.id}
                    exerciseName={card.exerciseName}
                    onChangeExerciseName={(name) => updateExerciseName(card.id, name)}
                    deleteCard={handleDeleteExerciseCard} />
            })}

            <Button title='Add Exercise' onPress={handleAddExerciseCard} />
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
