package TicTacToe;

import java.util.Scanner;

public class Main {

    public static char[][] board = new char[3][3]; // 2D array that will store each of our values (X's or O's)
    public static char currentPlayer = 'x'; // Current player
    public static boolean winner = false; //

    public static void main(String[] args) {
        System.out.println("Welcome to tic tac toe!");

        System.out.println(" 1  | 2  | 3  ");
        System.out.println("------------");
        System.out.println(" 4  | 5  | 6  ");
        System.out.println("------------");
        System.out.println(" 7  | 8  | 9  ");

        initializeBoard();

        while(!winner){

            if(isFull()){
                isWinner();
                break;
            } else {
                pickSpot();
                updateBoard();
                isWinner();
            }
        }
        if(winner){
            System.out.println("Loser is " + currentPlayer);
        } else {
            System.out.println("Cat's game, no winner decided");
        }

    }

    public static boolean isFull(){
        for(int x = 0; x < 3; x++){
            for(int z = 0; z < 3; z++){
                if(board[x][z] == '-'){
                    return false;
                }
            }
        }
        return true;
    }

    public static void initializeBoard(){
        for(int x = 0; x < 3; x++){
            for(int z = 0; z < 3; z++){
                board[x][z] = '-';
            }
        }
    }

    public static void pickSpot(){
        System.out.println("User " + currentPlayer + " select which box");
        Scanner boxNumber = new Scanner(System.in);
        int spot = boxNumber.nextInt();

        // do the try catch here to make sure they selected an integer spot

        placeMark(spot);

        switch(currentPlayer){
            case 'x':
                currentPlayer = 'O';
                break;
            case 'O':
                currentPlayer = 'x';
                break;
        }

    }

    public static void updateBoard(){
        System.out.println("--------Updated Board--------");
        for(int i = 0; i < 3; i++){
            System.out.println("");
            for(int j = 0; j < 3; j++){
                System.out.print(board[i][j] + " | ");
            }
        }
        System.out.println("");
    }

    public static void placeMark(int spot){
        switch(spot){
            case 1:
                board[0][0] = currentPlayer;
                break;
            case 2:
                board[0][1] = currentPlayer;
                break;
            case 3:
                board[0][2] = currentPlayer;
                break;
            case 4:
                board[1][0] = currentPlayer;
                break;
            case 5:
                board[1][1] = currentPlayer;
                break;
            case 6:
                board[1][2] = currentPlayer;
                break;
            case 7:
                board[2][0] = currentPlayer;
                break;
            case 8:
                board[2][1] = currentPlayer;
                break;
            case 9:
                board[2][2] = currentPlayer;
                break;

        }

    }

    public static void isWinner(){

        // Rows
        if(board[0][0] == 'x' && board[0][1] == 'x' && board[0][2] == 'x' || board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O'){
            winner = true;
        } else if (board[1][0] == 'x' && board[1][1] == 'x' && board[1][2] == 'x' || board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O'){
            winner = true;
        } else if(board[2][0] == 'x' && board[2][1] == 'x' && board[2][2] == 'x' || board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O'){
            winner = true;
        }

        // columns
        else if (board[0][0] == 'x' && board[1][0] == 'x' && board[2][0] == 'x' || board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O'){
            winner = true;
        } else if(board[0][1] == 'x' && board[1][1] == 'x' && board[2][1] == 'x' || board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') {
            winner = true;
        } else if (board[0][2] == 'x' && board[1][2] == 'x' && board[2][2] == 'x' || board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O'){
            winner = true;
        }

        // diagonals
        else if(board[0][0] == 'x' && board[1][1] == 'x' && board[2][2] == 'x' || board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O'){
            winner = true;
        } else if(board[0][2] == 'x' && board[1][1] == 'x' && board[2][0] == 'x' || board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O'){
            winner = true;
        }
        // If we get to here, no winner has been declared yet

    }


}
