import { useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client/react';
import {
  Typography,
  Stack,
  TextField,
  Button,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TODOS_QUERY = gql`
  query Todos {
    todos {
      id
      text
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      text
      completed
    }
  }
`;

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosQueryData {
  todos: Todo[];
}

interface AddTodoVariables {
  text: string;
}

interface ToggleTodoVariables {
  id: string;
}

export const TodoSection: React.FC = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const { data, loading, error, refetch } = useQuery<TodosQueryData>(TODOS_QUERY);

  const [addTodo, { loading: addLoading }] = useMutation<{ addTodo: Todo }, AddTodoVariables>(
    ADD_TODO,
    {
      onCompleted: () => {
        setNewTodoText('');
        void refetch();
      },
    },
  );

  const [toggleTodo] = useMutation<{ toggleTodo: Todo }, ToggleTodoVariables>(TOGGLE_TODO, {
    onCompleted: () => {
      void refetch();
    },
  });

  const handleAddTodo = async () => {
    const trimmed = newTodoText.trim();
    if (!trimmed) return;
    await addTodo({ variables: { text: trimmed } });
  };

  const handleToggleTodo = async (id: string) => {
    await toggleTodo({ variables: { id } });
  };

  return (
    <Stack spacing={2} mt={4}>
      <Typography variant="h6">Todos (Mongo-backed):</Typography>

      {loading && (
        <Stack direction="row" alignItems="center" spacing={1}>
          <CircularProgress size={20} />
          <Typography variant="body2">Loading todos...</Typography>
        </Stack>
      )}

      {error && <Alert severity="error">Error loading todos: {error.message}</Alert>}

      {/* Input row */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="New todo"
          variant="outlined"
          size="small"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              void handleAddTodo();
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleAddTodo}
          disabled={addLoading || !newTodoText.trim()}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Stack>

      {/* List */}
      {data && (
        <>
          {data.todos.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No todos yet — add one above!
            </Typography>
          ) : (
            <List>
              {data.todos.map((todo) => (
                <ListItem
                  key={todo.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      checked={todo.completed}
                      onChange={() => void handleToggleTodo(todo.id)}
                    />
                  }
                >
                  <ListItemText
                    primary={todo.text}
                    secondary={todo.completed ? 'Completed' : 'Incomplete'}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </>
      )}
    </Stack>
  );
};
