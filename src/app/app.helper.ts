export function parser(data: string, tabIndex: number = 2) {
  let result: string = `[\n`;
  result += ``;
  let prevLine: string = '';
  let prevTabbing: number = 0;
  let reduced: boolean = false;
  for (const line of data.split('\n')) {
    let tabbing: number = countTabbing(line, tabIndex);
    if (reduced) {
      tabbing--;
      if (tabbing <= 0) {
        reduced = false;
        tabbing++;
      }
    }
    let temp: string = COPY((!reduced ? tabSpace(tabIndex) : '') + line);
    if (temp.includes('- type:')) {
      temp = tabSpace(tabIndex).repeat(tabbing + 1) + '{\n' + temp;
      temp = temp.replace('- type:', tabSpace(tabIndex) + 'type:')
    }
    if (temp.includes('- !type:')) {
      temp = temp.replace('- !type:', 'type: ')
      reduced = true;
      tabbing--;
    }
    const indOfDots: number = temp.indexOf(':');
    if (indOfDots !== -1) {
      if (indOfDots !== temp.length - 2) {
        temp = temp.substring(0, temp.length - 1);
        if (Number(temp.substring(temp.indexOf(': ') + 2, temp.length)) ||
          temp.substring(temp.indexOf(': ') + 2, temp.length) === 'true' ||
          temp.substring(temp.indexOf(': ') + 2, temp.length) === 'false'
        ) {
          temp += ',';
        } else {
          if (!temp.includes('#')) {
            temp = temp.replace(': ', ': \'') + '\',';
          } else {
            if (Number(temp.substring(temp.indexOf(': ') + 2, temp.indexOf('#') - 1))) {
              temp = temp.substring(0, temp.indexOf('#') - 1) + ', //' + temp.substring(temp.indexOf('#') + 1);
            } else {
              temp = temp.replace(': ', ': \'');
              temp = temp.substring(0, temp.indexOf('#') - 1) + '\', //' + temp.substring(temp.indexOf('#') + 1);
            }
          }
        }
      } else {
        temp = temp + ' {';
      }
    }
    if (prevTabbing > tabbing) {
      const closers = prevTabbing - tabbing;
      let tempTab: number = COPY(prevTabbing);
      let temped: string = '';
      for (let i = 0; i < closers; i++) {
        temped += (tabSpace(tabIndex).repeat(tempTab) + '},\n');
        tempTab--;
      }
      temp = temped + temp;
    }
    if (temp.includes('},') && isEmptyNewLine(temp)) {
      temp = temp.substring(0, temp.indexOf('\n'));
    }
    result += removeEmptyNewline(temp + '\n');
    prevTabbing = tabbing;
    prevLine = line;
  }
  result += `]`;
  copyToClipboard(result);
}

function countTabbing(value: string, tabIndex: number) {
  if (!value.startsWith(' ')) {
    return 0;
  }
  let spaceCounter: number = 0;
  for (const char of value) {
    if (char !== ' ') {
      break;
    }
    spaceCounter++;
  }
  return Number(Number(spaceCounter / tabIndex).toFixed(0));
}

export function COPY(value: any) {
  return JSON.parse(JSON.stringify(value));
}

function tabSpace(tabIndex: number) {
  return ' '.repeat(tabIndex);
}

function isEmptyNewLine(value: string) {
  let temp: string = COPY(value);
  while (temp.includes(' ')) {
    temp = temp.replace(' ', '');
  }
  return !temp.substring(temp.indexOf('\n') + 2);
}

function removeEmptyNewline(value: string) {
  let result: string = '';
  for (const line of value.split('\n')) {
    let temp: string = COPY(line);
    while (temp.includes(' ')) {
      temp = temp.replace(' ', '');
    }
    while (temp.includes('\n')) {
      temp = temp.replace('\n', '');
    }
    if (temp.trim()?.length) {
      result += line + '\n';
    }
  }
  return result;
}

function copyToClipboard(item: string) {
  document.addEventListener('copy', (e: ClipboardEvent) => {
    e?.clipboardData?.setData('text/plain', (item));
    e.preventDefault();
    document.removeEventListener('copy', () => {});
  });
  document.execCommand('copy');
}
