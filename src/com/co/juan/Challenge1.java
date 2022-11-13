package com.co.juan;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Challenge1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> stringList = new ArrayList<>();
        System.out.println("Ingrese el tipo de Random a generar (Tipo A o Tipo B)");
        String type = sc.nextLine();
        Random rnd = new Random();
        for (int i = 0; i < 100; i++) {
            String generatedRandom = generateRandom(type);
            System.out.println(generatedRandom);
            stringList.add(generatedRandom);
        }
        System.out.println("Ingrese la cadena de texto a comparar");
        String text = sc.nextLine();
        if(!verifyString(text, stringList)){
            System.out.println("El valor está dentro de la lista");
        }else{
            System.out.println("El valor no está dentro de la lista");
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

    public static boolean verifyString(String text, List<String> stringList){
        Boolean result = true;
        for (String s: stringList) {
            if(s.equals(text)){
                result = false;
                break;
            }else{
                result = true;
            }
        }
        return result;
    }
}
