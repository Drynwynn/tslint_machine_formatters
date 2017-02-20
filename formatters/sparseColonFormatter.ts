import {Formatters, RuleFailure} from 'tslint';

export class Formatter extends Formatters.AbstractFormatter {
  public format(failures: RuleFailure[]): string {
    const failuresSparseColon = failures.map((failure) => {
      const filename = failure.getFileName();
      const msg = failure.getFailure();
      const rule = failure.getRuleName();
      const eLineChar = failure.getEndPosition().getLineAndCharacter();
      const sLineChar = failure.getStartPosition().getLineAndCharacter();
      const vscodeLocation = `${sLineChar.line + 1},${sLineChar.character + 1},${eLineChar.line + 1},${eLineChar.character + 1}`

      return `${filename}:${vscodeLocation}:(${rule}) ${msg}`;
    });
    return failuresSparseColon.join('\n') + '\n';
  }
}
