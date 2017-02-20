import {Formatters, RuleFailure} from 'tslint';

export class Formatter extends Formatters.AbstractFormatter {
  public format(failures: RuleFailure[]): string {
    const failuresJSON = failures.map((failure) => JSON.stringify(failure.toJson()));
    return failuresJSON.join('\n') + '\n';
  }
}
