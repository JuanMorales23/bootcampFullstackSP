package com.co.juan;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingrese el tipo de Random a generar (Tipo A o Tipo B");
        String type = sc.nextLine();
        Random rnd = new Random();
        for (int i = 0; i < 100; i++) {
            System.out.println(generateRandom(type));
        }
    }

    public static String generateRandom(String type){
        Random rnd = new Random();
        String random = "";
        Integer intRandom;
        if(type.equals("Tipo A")){
            random = "54";
            for (int i = 0; i < 8; i++) {
                intRandom = rnd.nextInt(10);
                random = random + intRandom.toString();
            }
        }else if(type.equals("Tipo B")){
            random = "08";
            for (int i = 0; i < 8; i++) {
                intRandom = rnd.nextInt(10);
                random = random + intRandom.toString();
            }
        }else{
            random = "Opción no valida";
        }
        return random;
    }
}
