#include<stdio.h>

int main(){
    char num[10];
    gets(num);

    int freq[10] = {0};
    for(int i = 0; i < 9 ;i++){
        char c = num[i];
        int digit = c - '0';
        freq[digit]++;
    }

    for(int i = 0; i < 9; i++){
        printf("%d %d", i, freq[i]);
    }

    return 0;
}
