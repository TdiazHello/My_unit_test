
const my_alpha_number_t = nbr => `${nbr}`;

const sum = (a, b) => {
if (typeof a != 'number' || typeof b != 'number' ) {
return 0;
}
return a + b;
};

const my_size_alpha_t = (str = '') => {
let count = 0;
if (typeof str != 'string') {
return count;
}
while(!!str[count]) {
count++;
}
return count;
}

const my_display_alpha_t = () => 'abcdefghijklmnopqrstuvwxyz';

const my_array_alpha_t = (str) => {
const result = [];
for (let i = 0; i < my_size_alpha_t(str); i += 1) {
result[i] = str[i];
}
return result;
};

const my_is_posi_neg_t = (nbr) => {
if (nbr > 0) {
return 'POSITIF';
}
if (nbr <= 0) {
return 'NEGATIVE';
}
return 'POSITIF';
};

const my_size_alpha_t = (str) => {
let count = 0;
while (!!str[count]) {
count++;
}
return count;
};

my_display_alpha_reverse_t = () => {
const alpha = my_display_alpha_t();
let reverseAlpha = '';
for (let i = my_size_alpha_t(alpha); i > 0; i -= 1) {
reverseAlpha += alpha[i-1];
}
return reverseAlpha;
}

export const my_length_array_t = (arr) => {
let i = 0;
while(!!arr[i]) {
i += 1;
}
return i;
}

const my_display_unicode_t = (arr) => {
const results = [];
for (let i = 0; i < arr.length; i += 1) {
const decimal = arr[i];
if ((decimal >= 65 && decimal <= 99)) {
results[i] = String.fromCharCode(arr[i]);
}
if ((decimal >= 97 && decimal <= 122)) {
results[i] = String.fromCharCode(arr[i]);
}
if ((decimal >= 48 && decimal <= 57)) {
results[i] = String.fromCharCode(arr[i]);
}
if (decimal === 32) {
results[i] = String.fromCharCode(arr[i]);
}
}
return results.join('');
};
